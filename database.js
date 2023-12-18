// database.js
class Database {
    constructor() {
      this.data = {};
    }
  
    createCollection(collectionName) {
      if (!this.data[collectionName]) {
        this.data[collectionName] = [];
      }
    }
  
    insertOne(collectionName, document) {
      this.data[collectionName].push(document);
    }
  
    findOne(collectionName, query) {
      const collection = this.data[collectionName];
      if (collection) {
        return collection.find(document => this.matchQuery(document, query));
      }
      return null;
    }
  
    findMany(collectionName, query) {
      const collection = this.data[collectionName];
      if (collection) {
        return collection.filter(document => this.matchQuery(document, query));
      }
      return [];
    }
  
    updateOne(collectionName, query, update) {
      const collection = this.data[collectionName];
      if (collection) {
        const document = collection.find(document => this.matchQuery(document, query));
        if (document) {
          Object.assign(document, update);
          return true;
        }
      }
      return false;
    }
  
    deleteOne(collectionName, query) {
      const collection = this.data[collectionName];
      if (collection) {
        const index = collection.findIndex(document => this.matchQuery(document, query));
        if (index !== -1) {
          collection.splice(index, 1);
          return true;
        }
      }
      return false;
    }
  
    matchQuery(document, query) {
      for (const key in query) {
        if (query.hasOwnProperty(key) && document[key] !== query[key]) {
          return false;
        }
      }
      return true;
    }
  }
  
  module.exports = Database;
  