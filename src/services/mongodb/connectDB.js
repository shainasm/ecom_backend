import mongoose from 'mongoose'

const connectDB = async () => {
    const connectionString = process.env.DB_URL

    try {
        await mongoose.connect(connectionString)
        console.log('Connected to the DB !!! ')
    } catch (error) {
        console.log(`could not connect to the DB:\n ${error.message}`)
        console.log(error.message)
    }
}

export default connectDB    