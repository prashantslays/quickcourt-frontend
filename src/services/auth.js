export async function loginUser(email, password) {
    if (email === "admin@test.com" && password === "Passw@mdmyc487") {
      return {
        token: "dummy-admin-token",
        user: {
          name: "Admin",
          role: "admin",
        },
      };
    }
  
    if (email === "owner@test.com" && password === "123456") {
      return {
        token: "dummy-owner-token",
        user: {
          name: "Owner",
          role: "owner",
        },
      };
    }
  
    if (email === "user@test.com" && password === "123456") {
      return {
        token: "dummy-user-token",
        user: {
          name: "User",
          role: "user",
        },
      };
    }
  
    throw new Error("Invalid Email or Password");
  }