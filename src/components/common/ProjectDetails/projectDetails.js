import xMemeBackgroundImg from '../../../assets/images/xmeme.jpg'
import peekaabookBackgroundImg from '../../../assets/images/peekaabook.jpg'
import derschnackBackgroundImg from '../../../assets/images/derschnack.jpg'

const projects = [{
    'name': 'xMeme',
    'time': '2021',
    'description': 'Built this amazing mini project for the Crio Winter of Doing 2021 Stage 2. It allows users to see and publish memes in real-time. Developed a fully functioning API for the same.',
    'tags': 'REST APIs | AJAX | Swagger | Flask',
    'github': 'https://github.com/Aihab1/xMeme',
    'link': 'https://x-meme.herokuapp.com/',
    'imageSrc': xMemeBackgroundImg 
}, {
    'name': 'Derschnack',
    'time': '2020',
    'description': 'Developed a real-time chat web application which helps users to chat in a slack-like environment by creating public / private chat rooms. The application requires only a username to start chatting and it can be changed anytime.',
    'tags': 'Socket.IO | Flask | Javascript',
    'github': 'https://github.com/Aihab1/Schnack',
    'link': 'https://derschnack.herokuapp.com/',
    'imageSrc': derschnackBackgroundImg
}, {
    'name': 'Peekaabook',
    'time': '2020',
    'description': 'Created a book review website which helps users to browse & search books, add books to their reading wish list, write reviews and also read reviews and see ratings given by the community.',
    'tags': 'Heroku Postgres | GoogleBooks API | SQLAlchemy',
    'github': 'https://github.com/Aihab1/Peekaabook',
    'link': 'https://peek-aa-book.herokuapp.com/',
    'imageSrc': peekaabookBackgroundImg
}]

export default projects