# code wars katas
import re

#camelcase this one took me way longer than it should have and i ended up not useing regex which is what I wanted to do in the first place 
# def camelCase (text):
#    if (text != '') : 
#         word = re.sub('_', ' ', text) 
#         word2= re.sub('-', ' ', word).split()
#         word3 = word2[0]
#         word2.remove(word2[0])
#         print(word2)
#         word4 =' '.join(word2).title()
#         word5=re.sub(' ','', word4)
#         print(word3+word5)
#    else:
#        print(text)
# camelCase('')
# Write your code here!


# Create Classes and sub classes 
class Member:
    def __init__(self, full_name, why_you_here):
        self.full_name = full_name
        self.introduce_me = print(f'Hi, my name is {self.full_name}!')
        
class Student(Member):
    def __init__(self, full_name, why_you_here):
        super().__init__(full_name, why_you_here)
        self.reason_here = why_you_here
        self.type = "Student"
class Instructor(Member):
    def __init__(self, full_name, why_you_here):
        super().__init__(full_name, why_you_here)
        self.bio = why_you_here
        self.skills = ["JavaScript", "Django", "React"]
        self.type = 'Instructor'
    def add_skill(self, new_skill):
        self.skills.append(new_skill)
        print(f'The instructor has added {new_skill} to their list of skills!')

class Workshop():
    def __init__(self, date, subject):
        self.date = date
        self.subject = subject
        self.instructors = []
        self.roster = []
    def add_participant(self, member):
        if member.type == 'Instructor':
            self.instructors.append(member.full_name)
            print(f'{member.full_name} has been added to instructors')
        if member.type == 'Student':
            self.roster.append(member.full_name)
            print(f'{member.full_name} has been added to student roster')
   
    def print_details(self, specific_details):
        if specific_details == 'all':         
            print(f"Workshop on {self.subject} is on {self.date} \n The students are {self.roster} \n and is taught by {self.instructors}")
        if specific_details == 'students':
            print(f"The Students enrolled currently are {self.roster} ")
        if specific_details == 'instructors':
            print(f"The Instructors for the workshop are {self.instructors}")
        if specific_details == 'workshop':
            print(f" The Workshop for {self.subject} is on {self.date}")
workshop = Workshop("12/03/2014", "Shutl")

jane = Student("Jane Doe", "I am trying to learn programming and need some help")
lena = Student("Lena Smith", "I am really excited about learning to program!")
vicky = Instructor("Vicky Python", "I want to help people learn coding.")
vicky.add_skill("HTML")
vicky.add_skill("JavaScript")
nicole = Instructor("Nicole McMillan", "I have been programming for 5 years in Python and want to spread the love")
nicole.add_skill("Python")

workshop.add_participant(jane)
workshop.add_participant(lena)
workshop.add_participant(vicky)
workshop.add_participant(nicole)
workshop.print_details('workshop')
workshop.print_details('students')
workshop.print_details('instructors')
workshop.print_details('all')