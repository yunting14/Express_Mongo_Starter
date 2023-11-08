import User from "./UserSchema";

const user = new User({
  name: "Test User",
  email: "testuser@example.com",
  createdAt: new Date().toISOString(),
});

// TODO: move to separate file to run in a separate script before starting the app 
export async function seedDB() {
  try {
    await User.deleteMany({});
    await user.save();
    console.log("Test User seeded");
  } catch (error) {
    console.error("Error seeding:", error);
  }
}
