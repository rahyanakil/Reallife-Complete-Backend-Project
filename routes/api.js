const express = require('express')
const router =express.Router()

import * as TaskController from '../app/controllers/TaskController.js'
import * as UserController from '../app/controllers/UserController.js'
import * as AuthMiddleware from '../app/middlewares/AuthMiddleware.js'

//users[before login] api end point function joto gula ache sob gula likha hobe
router.post(path:"/Registration",UserController.Registration)
router.post(path:"/Login",UserController.Login)
router.post(path:"/EmailVerify",UserController.EmailVerify)
router.post(path:"/CodeVerify",UserController.CodeVerify)
router.post(path:"/ResetPassword",UserController.ResetPassword)

//users[after login] api end point function joto gula ache sob gula likha hobe
router.get(path:"/ProfileDetails",AuthMiddleware,UserController.ProfileDetails)
router.post(path:"/profileUpdate",AuthMiddleware,UserController.profileUpdate) 

//Task[After Login] api end point function joto gula ache sob gula likha hobe
router.post(path:"/CreateTask",AuthMiddleware,TaskController.CreateTask)
router.get(path:"/UpdateTaskStatus",AuthMiddleware,TaskController.UpdateTaskStatus)
router.get(path:"/TaskListByStatus",AuthMiddleware,TaskController.TaskListByStatus)
router.get(path:"/DeleteTask",AuthMiddleware,TaskController.DeleteTask)
router.get(path:"/CountTask",AuthMiddleware,TaskController.CountTask)

export default router;