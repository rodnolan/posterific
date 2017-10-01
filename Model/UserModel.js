export default class UserModel {

    id = '';
    firstName = '';
    profileImageUri = '';

    constructor(id, firstName, profileImageUri) {
      this.id = id;
      this.firstName = firstName;
      this.profileImageUri = profileImageUri;
    }

}
