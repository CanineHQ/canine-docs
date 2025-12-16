---
sidebar_position: 1
---

# LDAP Authentication

LDAP (Lightweight Directory Access Protocol) allows you to authenticate Canine users against your organization's directory service, such as Microsoft Active Directory or OpenLDAP.

## Why Use LDAP?

- **Centralized User Management** - Manage user access from your existing directory service
- **Single Sign-On** - Users authenticate with their corporate credentials
- **Group-Based Access Control** - Map LDAP groups to Canine roles and permissions
- **Compliance** - Meet organizational security requirements for centralized authentication

## Prerequisites

Before configuring LDAP authentication, ensure you have:

1. Access to your LDAP server (hostname, port)
2. A service account (bind DN) with read access to the directory
3. The base DN for user searches
4. Network connectivity between Canine and your LDAP server

## Configuration

Navigate to **Account > Authentication > + Add LDAP Provider** in your Canine dashboard.

### Connection Settings

| Setting | Description | Example |
|---------|-------------|---------|
| **Server URL** | LDAP server address with protocol | `ldap://ldap.example.com:389` or `ldaps://ldap.example.com:636` |
| **Bind DN** | Service account distinguished name | `cn=canine-svc,ou=Service Accounts,dc=example,dc=com` |
| **Bind Password** | Service account password | `""""""""` |
| **Base DN** | Starting point for user searches | `ou=Users,dc=example,dc=com` |

### User Search Settings

| Setting | Description | Example |
|---------|-------------|---------|
| **User Filter** | LDAP filter to find users | `(sAMAccountName={{username}})` |
| **Username Attribute** | Attribute containing the username | `sAMAccountName` or `uid` |
| **Email Attribute** | Attribute containing the email | `mail` |
| **Display Name Attribute** | Attribute for the user's display name | `displayName` or `cn` |

### Group Settings (Optional)

| Setting | Description | Example |
|---------|-------------|---------|
| **Group Base DN** | Starting point for group searches | `ou=Groups,dc=example,dc=com` |
| **Group Filter** | Filter to find groups for a user | `(member={{dn}})` |
| **Admin Group** | Group DN for admin access | `cn=canine-admins,ou=Groups,dc=example,dc=com` |

### Team Provisioning

When **Team Provisioning Mode** is set to **Just In Time**, Canine automatically syncs a user's LDAP groups to Canine teams when they log in. On each login:

- The user is added to Canine teams that match their current LDAP groups
- The user is removed from Canine teams if they no longer belong to the corresponding LDAP group

## Example Configurations

### Active Directory

```
Server URL: ldaps://ad.company.com:636
Bind DN: cn=canine-service,ou=Service Accounts,dc=company,dc=com
Base DN: ou=Employees,dc=company,dc=com
User Filter: (sAMAccountName={{username}})
Username Attribute: sAMAccountName
Email Attribute: mail
```

### OpenLDAP

```
Server URL: ldap://ldap.company.com:389
Bind DN: cn=readonly,dc=company,dc=com
Base DN: ou=people,dc=company,dc=com
User Filter: (uid={{username}})
Username Attribute: uid
Email Attribute: mail
```

## Security Recommendations

- **Use LDAPS** - Always use LDAPS (port 636) or StartTLS for encrypted connections
- **Service Account Permissions** - Grant only read access to the service account
- **Network Security** - Restrict LDAP traffic to internal networks or use a VPN
- **Certificate Validation** - Enable certificate validation for LDAPS connections

## Troubleshooting

### Connection Refused

- Verify the LDAP server is accessible from your Canine cluster
- Check firewall rules allow traffic on the LDAP port (389 or 636)
- Confirm the server URL includes the correct protocol (`ldap://` or `ldaps://`)

### Invalid Credentials

- Verify the Bind DN is the full distinguished name, not just the username
- Check the service account password is correct
- Ensure the service account is not locked or expired

### User Not Found

- Verify the Base DN contains the users you're searching for
- Check the User Filter syntax matches your directory schema
- Test the filter directly against your LDAP server using `ldapsearch`

### Certificate Errors (LDAPS)

- Ensure your LDAP server's certificate is valid and not expired
- For self-signed certificates, import the CA certificate into Canine's trust store
- Verify the certificate's Common Name matches the server hostname
