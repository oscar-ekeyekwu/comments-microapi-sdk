const rp = require('request-promise');
require('dotenv').config();

const downvoteSingleComment = async (token, commentId, userId) => {
  if (!userId) {
    return `User ID must not be empty!`;
  }
  var options = {
    uri: `${process.env.BaseUrl}/v1/comments/${commentId}/votes/downvote`,
    headers: {
      'User-Agent': 'Request-Promise',
      Authorization: `Bearer ${token}`,
    },
    method: 'PATCH',
    body: {
      ownerId: userId,
    },
    json: true, // Automatically parses the JSON string in the response
  };

  try {
    const downvoteResponse = await rp(options);
    return downvoteResponse;
  } catch (error) {
    return error.message;
  }
};

module.exports = downvoteSingleComment;
