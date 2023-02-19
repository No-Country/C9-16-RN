const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, res, cb)=>{
        cb(null, './public/uploads')
    }, 
    filename: (req, file, cb)=>{
        const ext = file.originalname.split('.').pop()
        const name = file.originalname.split('.').shift()
        cb(null, `${name}-${Date.now()}.${ext}`)
    }
})

const upload = multer({storage: storage})

exports.upload = upload.single('profileImage')