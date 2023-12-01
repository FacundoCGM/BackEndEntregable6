import mongoose from 'mongoose';

const mongooseURL = 'mongodb://127.0.0.1:27017/segundaEntrega'

  try {
    await mongoose.connect(mongooseURL);
    console.log('Conectado a la base de datos de MongoDB')
  } catch (error) {
    console.log(`ERROR => ${error}`)
  }