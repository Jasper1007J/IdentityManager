### Angular Account Management

This Angular application provides functionality for account management, including user authentication, account registration, viewing account information, and editing account details.

#### Features:
- **Authentication**: Users can log in to their accounts securely using the login component.
- **Registration**: New users can create accounts by registering with the application using the registration component.
- **Account Information**: Users can view their account details such as name, email, and contact information through the account info component.
- **Edit Account**: Users have the ability to edit their account details, including updating their name, email, phone number, and address.

#### Project Structure:
- **src/app/auth**: Contains services and components related to user authentication.
  - **auth.service.ts**: Provides authentication-related functionalities such as login and registration.
  - **login**: Directory containing components and styles related to the login functionality.
  - **register**: Directory containing components and styles for user registration.
- **src/app/account**: Contains services and components related to account management.
  - **account.service.ts**: Provides functionalities for managing user account information.
  - **account-info**: Component to display user account information.
  - **edit-account**: Component to allow users to edit their account details.
- **src/app/app-routing.ts**: Defines the routing configuration for navigating between different components.
- **src/app/app.module.ts**: Main module file where application modules and dependencies are declared.

#### Usage:
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using npm or yarn: `npm install` or `yarn install`.
4. Start the development server: `ng serve`.
5. Access the application in your browser at the specified URL.

#### Dependencies:
- **Angular**: The application is built using Angular framework.
- **@angular/forms**: Used for handling form-related functionalities.
- **@angular/router**: Provides routing functionalities for navigation between components.
- **@angular/common**: Provides common directives like NgIf and NgFor.
- **Bootstrap**: Optionally, Bootstrap can be used for styling the application components.


#### Author:
Namala Jasper
