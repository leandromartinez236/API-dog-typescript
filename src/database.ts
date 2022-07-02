import mongoose from 'mongoose'

const main = async () => {
  try {
    await mongoose.connect('mongodb+srv://admin:dogpassword@cluster0.drc7xpa.mongodb.net/?retryWrites=true&w=majority')
    console.log('The database is connected successfully')
  } catch (error) {
    console.log(error)
  }
}

main()
