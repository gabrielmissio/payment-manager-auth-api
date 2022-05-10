# payment-manager-auth-api

## signup user

```bash
aws cognito-idp admin-create-user --user-pool-id <USER_POOL_ID> --username <USERNAME> --user-attributes "Name"="email_verified","Value"="true" "Name"="email","Value"="yourv@mail.com" 
```
