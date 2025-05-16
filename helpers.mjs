const connectToDatabase = () => {
    const dummyPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        });
    });
    return dummyPromise;
};

export default connectToDatabase;
