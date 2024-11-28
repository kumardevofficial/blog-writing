const checkLogout = (req, res) => {
  res.clearCookie('token', { path: '/' });
  return res.status(200).json({ message: "Logged out successfully" });
}

export default checkLogout;