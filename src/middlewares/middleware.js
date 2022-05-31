export const isLogged = (req, res, next) => {
    if (req.session.email) next();
    else res.redirect("/login");
};