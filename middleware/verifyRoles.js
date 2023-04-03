const verifyRoles = (...allowedRoles) => {
  return (req, res, next) => {
    const rolesArray = [...allowedRoles];
    const userRoles = req.roles;
    // console.log({ passedRoles: rolesArray, userRoles });
    const canAccess = userRoles
      .map((role) => rolesArray.includes(role))
      .find((value) => value === true);
    if (!canAccess) return res.sendStatus(401);
    next();
  };
};

module.exports = { verifyRoles };
