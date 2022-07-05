import { Request, Response } from 'express'
import { Dog } from '../models/dog.model'

export const getAllDogs = async (_req: Request, res: Response): Promise<any> => {
  try {
    const dogs = await Dog.find()
    console.log(dogs)
    if (dogs?.length < 1) {
      return res.status(204).json({ message: 'Not content' })
    }
    return res.status(200).json(dogs)
  } catch (error) {
    console.log(error)
  }
}
export const getDog = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params
  try {
    const dog = await Dog.findOne({ _id: id })
    if (dog === null) {
      return res.status(400).json({ message: 'Dog not found' })
    }
    return res.status(200).json(dog)
  } catch (error) {
    console.log(error)
  }
}
export const createDog = async (req: Request, res: Response): Promise<any> => {
  const { name, age, breed, coatColor, ownerName } = req.body
  try {
    const newDog = await Dog.create({
      name,
      age,
      breed,
      coat_color: coatColor,
      owner_name: ownerName
    })
    return res.status(201).json(newDog)
  } catch (error: any) {
    return res.status(400).json({ message: error.message })
  }
}
export const updateDog = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params
  const { ...itemDog } = req.body
  try {
    const dog = await Dog.findOne({ _id: id })
    if (dog === null) {
      return res.status(400).json({ message: 'Dog not found' })
    }
    const updatedDog = await Dog.updateOne({ _id: id }, { ...itemDog })
    return res.status(200).json({ msg: 'dog is updated', dog: updatedDog })
  } catch (error) {
    console.log(error)
  }
}
export const deleteDog = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params
  try {
    await Dog.deleteOne({ _id: id })
    return res.status(200).json({ msg: 'dog deleted successfully' })
  } catch (error) {
    console.log(error)
  }
}
