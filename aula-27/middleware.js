const verificaAdmin = (req, res, next) => {
  const isAdmin = req.headers.isadmin;

  if (isAdmin) {
    return next();
  }

  return res.status(403).json({ status: 403, errorMessage: 'Sem permissão' });
};

module.exports = verificaAdmin;
