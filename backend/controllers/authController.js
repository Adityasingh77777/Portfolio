const User=require('../models/User');
const bcrypt= require('bcrypt')

const signup = async (req, res) => {
    try {
        const { email, password, role, name } = req.body;

        // Check if all fields are provided
        if (!email || !password || !role || !name) {
            return res.status(403).json({
                success: false,
                message: "All fields should be filled"
            });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(403).json({
                success: false,
                message: 'User already exists'
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save new user
        const user = new User({
            email,
            password: hashedPassword,
            role,
            name
        });

        await user.save();

        return res.status(200).json({
            success: true,
            message: 'User signed up successfully',
            user
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            err:err.message,
            success: false,
            message: "Server error during signup"
        });
    }
};


const login = async(req,res)=>{
    try{

        const {email, password}= req.body;

        if(!email || !password) return res.status(403).json({
            message:"all fields should be filled"
        })

        const existingUser=await User.findOne({email});

        if(!existingUser){
            return res.status(404).json({
                message:"User not found"
            })
        }

        const match=await bcrypt.compare(password,existingUser.password);

        if(!match){
            return res.status(403).json({
                message:"Password mismatched"
            })
        }

         return res.status(200).json({
            success: true,
            message: "Login successful",
            user: existingUser // be careful: exclude password when sending user object in production
        });

    }
    catch(err){
        return res.status(500).json({
            message:'login failed'
        })
    }
}
module.exports = {signup, login};