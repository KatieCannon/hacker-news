import axios from "axios";
const BASE_URL = "https://nc-news-hack.herokuapp.com/api";

export const getArticles = async () => {
  const { data } = await axios.get(`${BASE_URL}/articles`);
  return data.articles;
};

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data.topics;
};

export const login = async username => {
  const { data } = await axios.get(`${BASE_URL}/users/${username}`);
  return data.user[0];
};

export const getArticlesByTopic = async topic => {
  const { data } = await axios.get(`${BASE_URL}/topics/${topic}/articles`);
  return data.articles;
};
export const getArticle = async id => {
  const { data } = await axios.get(`${BASE_URL}/articles/${id}`);
  return data.article;
};
export const vote = async (_id, section, direction) => {
  const { data } = await axios.patch(
    `${BASE_URL}/${section}/${_id}?vote=${direction}`
  );
  return data;
};

export const postArticle = async newArticle => {
  const { data } = await axios.post(
    `${BASE_URL}/topics/${newArticle.belongs_to}/articles`,
    newArticle
  );
  return data.article;
};

export const getArticleComments = async id => {
  const { data } = await axios.get(`${BASE_URL}/articles/${id}/comments`);
  return data.comments;
};

export const addComment = async (id, newComment) => {
  const { data } = await axios.post(
    `${BASE_URL}/articles/${id}/comments`,
    newComment
  );
  return data.comment;
};

export const deleteComment = async id => {
  const { data } = await axios.delete(`${BASE_URL}/comments/${id}`);
  return data;
};
