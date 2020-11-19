import { projectFirestore } from "./config";

const getData = async (collection) => {
  try {
    const docs = await projectFirestore.collection(collection).get();
    let documents = [];
    docs.forEach((doc) => {
      documents.push({ ...doc.data(), id: doc.id });
    });
    return documents;
  } catch (err) {
    return err;
  }
};

const getOneData = async (collection, data) => {
  try {
    const docs = await projectFirestore.collection(collection).get();
    let documents = [];
    docs.forEach((doc) => {
      documents.push({ ...doc.data() });
    });

    const res = documents.find(
      (d) => d.email === data.email && d.password === data.password,
    );
    return res;
  } catch (err) {
    return err;
  }
};

const addData = async (collection, data) => {
  try {
    await projectFirestore.collection(collection).add(data);
    return "Success";
  } catch (err) {
    return err;
  }
};

const updateData = async (collection, data) => {
  try {
    await projectFirestore.collection(collection).doc(data.id).update(data);

    return "Success";
  } catch (err) {
    return err;
  }
};

const deleteData = async (collection, data) => {
  try {
    await projectFirestore.collection(collection).doc(data).delete();
    return "Success";
  } catch (err) {
    return err;
  }
};

export { getData, getOneData, addData, updateData, deleteData };
