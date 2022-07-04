import { model, Schema, Document } from 'mongoose'
import { Breed, CoatColor } from '../enums'
export interface IDog extends Document {
  id?: number
  name: string
  age: number
  breed: Breed
  coat_color: CoatColor
  owner_name?: string
}

const modelDog = new Schema<IDog>({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
    default: 1
  },
  breed: {
    type: String,
    enum: Object.values(Breed)
  },
  coat_color: {
    type: String,
    enum: Object.values(CoatColor)
  },
  owner_name: {
    type: String,
    trim: true
  }
})

export const Dog = model<IDog>('Dog', modelDog)
