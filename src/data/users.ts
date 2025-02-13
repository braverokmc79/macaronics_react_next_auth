const users = [

    {
        id: 'test1',
        name: "홍길동",
        email: "test1@gmail.com",
        password: "1111",  
        
    },
    {
        id: 'test2',
        name: "이하나",
        email: "test2@gmail.com",
        password: "1111",    
    },
    {
        id: 'test3',
        name: "이순신",
        email: "test3@gmail.com",
        password: "1111",
    }
]
    

export const getUserByEmail = (email:string) => {
    return users.find(user => user.email === email);
};



