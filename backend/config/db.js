import mongoose from 'mongoose'

// Export to server.js to run everything in there simultaneously (dotenv variables accessible there)
const connectDB = async () => {
	try {
		const connect = await mongoose.connect(process.env.MONGO_URI)

		console.log(`MongoDB connected to: ${connect.connection.host}`)
	} catch (error) {
		console.error(`Error: ${error.message}`)
		process.exit(1)
	}
}

export default connectDB
