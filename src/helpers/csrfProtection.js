// csrfProtection.js

import axios from 'axios';

const csrfMiddleware = async (req, res, next) => {
  try {
    // Fetch CSRF token from your backend API
    const { data: csrfResponse } = await axios.get(
      `http://awseb--AWSEB-1sIj49oClAGQ-188508438.us-east-1.elb.amazonaws.com/api/csrf-token`
    );
    const csrfToken = csrfResponse.csrfToken;
    // Set CSRF token in request headers
    axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;

    // Continue with the next middleware or route handler
    next();
  } catch (error) {
    // Handle error if unable to fetch CSRF token
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch CSRF token' });
  }
};

export default csrfMiddleware;
