const { initializeApp } = require('firebase/app')
const { getStorage, ref, uploadBytes, getDownloadURL } = require('firebase/storage')
const handleResponse = require('../utils/handleResponse')

const firebaseConfig = {
    apiKey: "AIzaSyA4oZPjUOi3Zpy0N1yDc9cOP5yuboJRTvU",
    authDomain: "movemind-academy.firebaseapp.com",
    projectId: "movemind-academy",
    storageBucket: "movemind-academy.appspot.com",
    messagingSenderId: "828390264966",
    appId: "1:828390264966:web:823b3d0e5222d09d534107"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app)


const uploadFile = async (file, path, res) => {
    const ext = file.originalname.split('.').pop()
    const name = file.originalname.split('.').shift()
    const storageRef = ref(storage, `${path}/${name}-${Date.now()}.${ext}`)
    const metadata = {
        contentType: file.mimetype,
    };

    await uploadBytes(storageRef, file.buffer, metadata)
    const URL = await getDownloadURL(storageRef)
    return URL
}

module.exports = { uploadFile }

