const router=require('express').Router()
const user=require('./User/userController')
const advocates=require('./Advocates/advocateController')
const cases=require('./Cases/caseController')
const appointments=require('./AdvAppointments/appointmentController')
 const chat=require('./Chats/chatController')
const caseStatusController=require('./Cases/CaseStatus/caseStatusController')
const Payments=require('./Cases/Payments/paymentController')
const Evidences=require('./Cases/Evidences/evidenceController')
const blog=require('./Blogs/blogController')
const complaints=require('./complaints/complaintController')
const Reviews=require('./Reviews/reviewController')
const Appeal=require('./Appeals/appealController')
const Policy=require('./LegalPolicy/policyController')


//advocate routes
router.post('/registerAdvocate',advocates.upload,advocates.registerAdvocate)
router.post('/viewAdvocateById/:id',advocates.viewAdvocateById)
router.post('/forgotPassword',advocates.forgotPassword)
router.post('/loginAdvocate',advocates.login)
router.post('/editAdvocateById/:id',advocates.uploadProfile,advocates.editAdvocateById)
router.post('/deleteAdvocateById/:id',advocates.deleteAdvocateById)
router.post('/resetPassword/:id',advocates.resetPassword)
router.post('/approveAdvocateById/:id',advocates.approveAdvocateById)
router.post('/rejectAdvocateById/:id',advocates.rejectAdvocateById)
router.post('/requireAuth',advocates.requireAuth)
router.post('/viewAdvocateReqs',advocates.viewAdvocateReqs)
router.post('/viewAdvocates',advocates.viewAdvocates)
router.post('/activateAdvocateById/:id',advocates.activateAdvocateById)
router.post('/deactivateAdvocateById/:id',advocates.deactivateAdvocateById)
router.post('/viewAdvocatesBySpecializn',advocates.viewAdvocatesBySpecializn)
router.post('/addRating/:id',advocates.addRating)




//users routers
router.post('/registerUser',user.upload,user.registerUser)
router.post('/loginUser',user.login)
router.post('/editUserById/:id',user.upload,user.editUserById)
router.post('/viewUserById/:id',user.viewUserById)
router.post('/userforgotPassword',user.forgotPassword)
router.post('/resetPassword',user.resetPassword)
router.post('/deleteUserById/:id',user.deleteUserById)
router.post('/editUserById',user.upload,user.login)
router.post('/requireAuth',user.requireAuth)
router.post('/viewUsers',user.viewUsers)

//case routes
router.post('/createCase/:id',cases.upload,cases.createCase)
router.post('/getCaseType',cases.getCaseType)
router.post('/getCaseByUserId/:id',cases.getCaseByUserId)
router.post('/getCaseById/:id',cases.getCaseById)
router.post('/deleteCase/:id',cases.deleteCase)
router.post('/getAllCases',cases.getAllCases)


router.post('/createAppointment',appointments.createAppointment)
router.post('/getAppointmentReqsByUserId/:id',appointments.getAppointmentReqsByUserId)
router.post('/getAppointmentReqsForAdv/:id',appointments.getAppointmentReqsForAdv)
router.post('/acceptReqbyAdv/:id',appointments.acceptReqbyAdv)
router.post('/rejectReqbyAdv/:id',appointments.rejectReqbyAdv)
router.post('/getAppointmentReqsById/:id',appointments.getAppointmentReqsById)
router.post('/getApprovedAppointmentsForAdv/:id',appointments.getApprovedAppointmentsForAdv)
router.post('/getApprovedAppointmentsForAdv/:id',appointments.getApprovedAppointmentsForAdv)

//chatting
router.post('/chatting',chat.chatting)
router.post('/viewChatRecipientsforAdvocateById/:id',chat.viewChatRecipientsforAdvocateById)
router.post('/viewChatRecipientsforUserId/:id',chat.viewChatRecipientsforUserId)
router.post('/viewChatBetweenUserAndAdv',chat.viewChatBetweenUserAndAdv)




//case status
router.post('/createStatus/:id',caseStatusController.createStatus)
router.post('/getStatusById/:id',caseStatusController.getStatusById)
router.post('/getStatusByCaseId/:id',caseStatusController.getStatusByCaseId)

//payments
router.post('/reqPayment/:id',Payments.reqPayment)
router.post('/getAllPaymentByAdvId/:id',Payments.getAllPaymentByAdvId)
router.post('/getPaymentsByCaseId/:id',Payments.getPaymentsByCaseId)
router.post('/getPaymentsById/:id',Payments.getPaymentsById)
router.post('/receivePaymentsById/:id',Payments.receivePaymentsById)

//evidences
router.post('/addEvidence/:id',Evidences.upload,Evidences.addEvidence)
router.post('/getEvidenceByCaseId/:id',Evidences.getEvidenceByCaseId)
router.post('/getEvidenceById/:id',Evidences.getEvidenceById)


//blogs
router.post('/addBlog/:id',blog.upload,blog.addBlog)
router.post('/viewBlogsById/:id',blog.viewBlogsById)
router.post('/editBlogsById/:id',blog.upload,blog.editBlogsById)
router.post('/deleteBlogsById/:id',blog.deleteBlogsById)
router.post('/viewAllBlogs',blog.viewAllBlogs)
router.post('/viewMyBlogsByadvocateId/:id',blog.viewMyBlogsByadvocateId)


//blogs
router.post('/addComplaint',complaints.addcomplaint)
router.post('/viewAllComplaints',complaints.viewAllcomplaints)
router.post('/viewComplaintById/:id',complaints.viewcomplaintById)
router.post('/deleteComplaintById/:id',complaints.deletecomplaintById)
router.post('/viewcomplaintByUserId/:id',complaints.viewcomplaintByUserId)

//reviews
router.post('/addReview',Reviews.addReview)
router.post('/viewAllreviewsByAdvId/:id',Reviews.viewAllreviewsByAdvId)

//for barcouncil
router.post('/deBarAdvocateById/:id',advocates.deBarAdvocateById)
router.post('/removeDeBarAdvocateById/:id',advocates.removeDeBarAdvocateById)
router.post('/viewDebarredAdvocates',advocates.viewDebarredAdvocates)


//appeals
router.post('/addAppeal/:id',Appeal.addAppeal)
router.post('/viewAllPendingAppeals',Appeal.viewAllPendingAppeals)
router.post('/viewAppealById/:id',Appeal.viewAppealById)
router.post('/deleteAppealById/:id',Appeal.deleteAppealById)
router.post('/viewAppealsByAdvId/:id',Appeal.viewAppealsByAdvId)
router.post('/replyAppealsById/:id',Appeal.replyAppealsById)

//Policies
router.post('/addPolicy',Policy.addPolicy)
router.post('/viewAllPolicy',Policy.viewAllPolicy)
router.post('/viewadvocatePolicy',Policy.viewadvocatePolicy)
router.post('/viewuserPolicy',Policy.viewuserPolicy)
router.post('/updatePolicyById',Policy.updatePolicyById)


module.exports=router