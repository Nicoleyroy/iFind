export const generateToken = (userID,res) => {
     const generateToken= (userID) => {
        const token = jwt.sign({userID}, process.env.JWT_SECRET, {
            expiresIn: "3d"
        });
        res.cookie("jwt", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000
        });
    }
}

