const adapt =
  (router, hasCookie = false) =>
  async (req, res) => {
    const request = {
      body: req.body,
      query: req.query,
      params: req.params,
      headers: req.headers
    };

    const response = await router(request);
    if (!hasCookie) return res.status(response.code).json(response.data);

    const shouldClearCookies = !response.cookie.value;
    if (shouldClearCookies) return res.clearCookie(response.cookie.name).status(response.code).json(response.data);

    return res
      .cookie(response.cookie.name, response.cookie.value, { httpOnly: true })
      .status(response.code)
      .json(response.data);
  };

module.exports = { adapt };
