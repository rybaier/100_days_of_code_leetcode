import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles';
import { getFirestore, collection, addDoc, query, where, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { firebase } from '../../firebase/config'

// Initialize Firestore
const db = getFirestore();

export default function HomeScreen(props, {extraData}) {
    console.log(extraData)
    const [entityText, setEntityText] = useState(''); // State to hold the text for the new entity
    const [entities, setEntities] = useState([]); // State to hold the entities fetched from Firestore

    // Reference to the 'entities' collection in Firestore
    const entityRef = collection(db, 'entities');
    const userID = props.extraData.id; // Assuming props.extraData contains user information

    useEffect(() => {
        // Set up a query to fetch entities for the current user, ordered by 'createdAt' in descending order
        const q = query(entityRef, where("authorID", "==", userID), orderBy('createdAt', 'desc'));

        // Listen for real-time updates to the query
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const newEntities = [];
            querySnapshot.forEach((doc) => {
                // For each document in the query result, extract data and add it to the newEntities array
                const entity = doc.data();
                entity.id = doc.id; // Add the document ID to the entity object
                newEntities.push(entity);
            });
            // Update the entities state with the newEntities array
            setEntities(newEntities);
        }, (error) => {
            console.log(error);
        });

        // Cleanup function to unsubscribe from the snapshot listener when the component unmounts
        return () => unsubscribe();
    }, [userID]);

    // Function to handle adding a new entity
    const onAddButtonPress = () => {
        if (entityText && entityText.length > 0) {
            // Create a server-side timestamp for the 'createdAt' field
            const timestamp = serverTimestamp();
            // Data for the new entity
            const data = {
                text: entityText,
                authorID: userID,
                createdAt: timestamp,
            };
            // Add the new entity to the 'entities' collection in Firestore
            addDoc(entityRef, data)
                .then(() => {
                    // Clear the input field and dismiss the keyboard after adding the entity
                    setEntityText('');
                    Keyboard.dismiss();
                })
                .catch((error) => {
                    alert(error);
                });
        }
    };

    // Function to render each entity item in the FlatList
    const renderEntity = ({ item, index }) => {
        return (
            <View style={styles.entityContainer}>
                <Text style={styles.entityText}>
                    {/* Display the entity text */}
                    {index + 1}. {item.text}
                </Text>
            </View>
        );
    };

    // const entityRef = firebase.firestore().collection('entities')
    // const userID = props.extraData.id

    // useEffect(() => {
    //     entityRef
    //         .where("authorID", "==", userID)
    //         .orderBy('createdAt', 'desc')
    //         .onSnapshot(
    //             querySnapshot => {
    //                 const newEntities = []
    //                 querySnapshot.forEach(doc => {
    //                     const entity = doc.data()
    //                     entity.id = doc.id
    //                     newEntities.push(entity)
    //                 });
    //                 setEntities(newEntities)
    //             },
    //             error => {
    //                 console.log(error)
    //             }
    //         )
    // }, [])

    // const onAddButtonPress = () => {
    //     if (entityText && entityText.length > 0) {
    //         const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    //         const data = {
    //             text: entityText,
    //             authorID: userID,
    //             createdAt: timestamp,
    //         };
    //         entityRef
    //             .add(data)
    //             .then(_doc => {
    //                 setEntityText('')
    //                 Keyboard.dismiss()
    //             })
    //             .catch((error) => {
    //                 alert(error)
    //             });
    //     }
    // }

    // const renderEntity = ({item, index}) => {
    //     return (
    //         <View style={styles.entityContainer}>
    //             <Text style={styles.entityText}>
    //                 {index}. {item.text}
    //             </Text>
    //         </View>
    //     )
    // }

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Add new entity'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEntityText(text)}
                    value={entityText}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            </View>
            { entities && (
                <View style={styles.listContainer}>
                    <FlatList
                        data={entities}
                        renderItem={renderEntity}
                        keyExtractor={(item) => item.id}
                        removeClippedSubviews={true}
                    />
                </View>
            )}
        </View>
    )
}


//FIRESTORE RULES for limiting authenticated access to user specific data
// rules_version = '2';

// service cloud.firestore {
//   match /databases/{database}/documents {
//    match /users/{userId} {
//   	allow read: if request.auth != null && request.auth.uid == userId;
// 		}
//    match /entities/{entityId} {
//   	allow read, write: if request.auth != null && request.auth.uid == resource.data.authorID;
// 		}

//   }
// }