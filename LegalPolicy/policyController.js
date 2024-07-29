const Policy = require('./policySchema'); 

// Add a new appeal
const addPolicy = (req, res) => {
    const appeal = new Policy({
        user: req.body.user,
        advocate: req.body.advocate,
    });

    appeal
        .save()
        .then((data) => {
            res.json({
                status: 200,
                message: 'Policy added successfully',
                data: data,
            });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                message: 'Error adding Policy',
                error: err,
            });
        });
};

// View all  
const viewAllPolicy =async (req, res) => {
    let appeals=await Policy.findOne({type:'policy'})
 console.log("pol",appeals);
        if(!appeals){
newData=new Policy({
    user: 
       
       `For clients in India seeking legal assistance from advocates, especially in cases of domestic abuse, several legal policies and rights ensure their protection and support. Clients have the right to confidentiality, meaning any information they share with their advocate must be kept private and cannot be disclosed without their consent. They are entitled to informed consent, which means they should be fully informed about their legal rights, the procedures involved, and the possible outcomes of their case before making any decisions.

        Clients also have the right to conflict-free representation, ensuring that their advocate acts solely in their best interest without any competing loyalties or interests. They should receive competent and diligent representation, meaning their advocate must possess the necessary knowledge and skills to handle their case effectively and must keep them informed of any significant developments.
        
        Furthermore, clients have the right to be treated with respect and dignity throughout the legal process. In cases of domestic abuse, they are protected under specific laws such as the Protection of Women from Domestic Violence Act, 2005, which provides remedies such as protection orders, residence orders, and monetary relief. Clients should be aware of these legal protections and their right to seek them through the legal system`
       
       
    ,
    advocate: 
        `In India, legal policies for advocates, especially those representing victims of domestic abuse, are guided by several key principles to ensure justice and support for the victims. Advocates must maintain strict confidentiality, safeguarding any information shared by their clients to protect their privacy and safety. They are responsible for obtaining informed consent, clearly explaining the legal processes, rights, and potential consequences to their clients. Advocates must avoid conflicts of interest and ensure that their actions and advice are in the best interest of their clients. They are expected to adhere to the professional conduct rules outlined by the Bar Council of India, which includes ongoing education to stay updated on legal changes and developments. Additionally, advocates must be well-versed in specific laws such as the Protection of Women from Domestic Violence Act, 2005, to provide effective legal support and advocacy for domestic abuse victims. Compliance with these laws and ethical standards ensures that advocates can offer the necessary legal assistance while upholding the dignity and rights of their clients.`
       
,
    type:'policy'
    
})

newData.save()
        }
    await Policy
        .findOne({type:'policy'})
      
        .exec()
        .then((appeals) => {
           
            res.status(200).json({
                status: 200,
                message: 'Appeals retrieved successfully',
                data: appeals,
            });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                message: 'Error retrieving appeals',
                error: err,
            });
        });
};

const viewuserPolicy =async (req, res) => {
    let appeals=await Policy.findOne({type:'policy'})
    console.log("pol",appeals);
           if(!appeals){
   newData=new Policy({
       user: 
          
          `For clients in India seeking legal assistance from advocates, especially in cases of domestic abuse, several legal policies and rights ensure their protection and support. Clients have the right to confidentiality, meaning any information they share with their advocate must be kept private and cannot be disclosed without their consent. They are entitled to informed consent, which means they should be fully informed about their legal rights, the procedures involved, and the possible outcomes of their case before making any decisions.
   
           Clients also have the right to conflict-free representation, ensuring that their advocate acts solely in their best interest without any competing loyalties or interests. They should receive competent and diligent representation, meaning their advocate must possess the necessary knowledge and skills to handle their case effectively and must keep them informed of any significant developments.
           
           Furthermore, clients have the right to be treated with respect and dignity throughout the legal process. In cases of domestic abuse, they are protected under specific laws such as the Protection of Women from Domestic Violence Act, 2005, which provides remedies such as protection orders, residence orders, and monetary relief. Clients should be aware of these legal protections and their right to seek them through the legal system`
          
          
       ,
       advocate: 
           `In India, legal policies for advocates, especially those representing victims of domestic abuse, are guided by several key principles to ensure justice and support for the victims. Advocates must maintain strict confidentiality, safeguarding any information shared by their clients to protect their privacy and safety. They are responsible for obtaining informed consent, clearly explaining the legal processes, rights, and potential consequences to their clients. Advocates must avoid conflicts of interest and ensure that their actions and advice are in the best interest of their clients. They are expected to adhere to the professional conduct rules outlined by the Bar Council of India, which includes ongoing education to stay updated on legal changes and developments. Additionally, advocates must be well-versed in specific laws such as the Protection of Women from Domestic Violence Act, 2005, to provide effective legal support and advocacy for domestic abuse victims. Compliance with these laws and ethical standards ensures that advocates can offer the necessary legal assistance while upholding the dignity and rights of their clients.`
          
   ,
       type:'policy'
       
   })
   
   newData.save()
           }
   await Policy
        .findOne({type:'policy'},{user:1})
      
        .exec()
        .then((appeals) => {
            res.status(200).json({
                status: 200,
                message: 'Appeals retrieved successfully',
                data: appeals,
            });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                message: 'Error retrieving appeals',
                error: err,
            });
        });
};

const viewadvocatePolicy =async (req, res) => {
    let appeals=await Policy.findOne({type:'policy'})
    console.log("pol",appeals);
           if(!appeals){
   newData=new Policy({
       user: 
          
          `For clients in India seeking legal assistance from advocates, especially in cases of domestic abuse, several legal policies and rights ensure their protection and support. Clients have the right to confidentiality, meaning any information they share with their advocate must be kept private and cannot be disclosed without their consent. They are entitled to informed consent, which means they should be fully informed about their legal rights, the procedures involved, and the possible outcomes of their case before making any decisions.
   
           Clients also have the right to conflict-free representation, ensuring that their advocate acts solely in their best interest without any competing loyalties or interests. They should receive competent and diligent representation, meaning their advocate must possess the necessary knowledge and skills to handle their case effectively and must keep them informed of any significant developments.
           
           Furthermore, clients have the right to be treated with respect and dignity throughout the legal process. In cases of domestic abuse, they are protected under specific laws such as the Protection of Women from Domestic Violence Act, 2005, which provides remedies such as protection orders, residence orders, and monetary relief. Clients should be aware of these legal protections and their right to seek them through the legal system`
          
          
       ,
       advocate: 
           `In India, legal policies for advocates, especially those representing victims of domestic abuse, are guided by several key principles to ensure justice and support for the victims. Advocates must maintain strict confidentiality, safeguarding any information shared by their clients to protect their privacy and safety. They are responsible for obtaining informed consent, clearly explaining the legal processes, rights, and potential consequences to their clients. Advocates must avoid conflicts of interest and ensure that their actions and advice are in the best interest of their clients. They are expected to adhere to the professional conduct rules outlined by the Bar Council of India, which includes ongoing education to stay updated on legal changes and developments. Additionally, advocates must be well-versed in specific laws such as the Protection of Women from Domestic Violence Act, 2005, to provide effective legal support and advocacy for domestic abuse victims. Compliance with these laws and ethical standards ensures that advocates can offer the necessary legal assistance while upholding the dignity and rights of their clients.`
          
   ,
       type:'policy'
       
   })
   
   newData.save()
           }
   await Policy
        .findOne({type:'policy'},{advocate:1})
      
        .exec()
        .then((appeals) => {
            res.status(200).json({
                status: 200,
                message: 'Appeals retrieved successfully',
                data: appeals,
            });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                message: 'Error retrieving appeals',
                error: err,
            });
        });
};
// update an Policy by ID
const updatePolicyById = (req, res) => {
    Policy
        .findOneAndUpdate({type:'policy'},
            {
                user: req.body.user,
                advocate: req.body.advocate,
            }
        )
        .exec()
        .then((appeal) => {
            if (!appeal) {
                return res.status(404).json({
                    message: 'Appeal not found',
                });
            }
            res.status(200).json({
                status: 200,
                message: 'Appeal deleted successfully',
                data: appeal,
            });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                message: 'Error deleting appeal',
                error: err,
            });
        });
};

module.exports = {
   addPolicy,
   viewAllPolicy,
   updatePolicyById,
   viewadvocatePolicy,
   viewuserPolicy
};
