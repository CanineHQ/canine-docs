---
sidebar_position: 3
---

# SAML Authentication

SAML 2.0 (Security Assertion Markup Language) allows you to authenticate Canine users through your organization's identity provider, such as Okta, Azure AD, OneLogin, or any SAML 2.0-compliant IdP.

## Why Use SAML?

- **Enterprise Standard** - SAML is widely adopted in enterprise environments
- **Single Sign-On** - Users authenticate with their existing corporate credentials
- **Security** - Signed assertions ensure authentication integrity
- **Team Provisioning** - Automatically sync user groups to Canine teams

## Prerequisites

Before configuring SAML authentication, ensure you have:

1. A SAML 2.0-compatible identity provider
2. Admin access to create an application in your identity provider
3. The IdP's metadata (Entity ID, SSO URL, and certificate)

## Configuration

Navigate to **Account > Authentication > + Add SAML Provider** in your Canine dashboard.

### Service Provider Details

When setting up your SAML application in your identity provider, you'll need these values from Canine:

| Setting | Value |
|---------|-------|
| **ACS URL** (Assertion Consumer Service) | `https://<your-canine-host>/accounts/<your-account>/auth/saml/callback` |
| **SP Entity ID** | `https://<your-canine-host>/accounts/<your-account>/auth/saml/metadata` |
| **Metadata URL** | `https://<your-canine-host>/accounts/<your-account>/auth/saml/metadata` |

### Identity Provider Settings

| Setting | Description | Example |
|---------|-------------|---------|
| **IdP Entity ID** | Unique identifier for your identity provider | `https://idp.example.com/saml/metadata` |
| **IdP SSO Service URL** | URL where authentication requests are sent | `https://idp.example.com/saml/sso` |
| **IdP Certificate** | X.509 certificate for verifying SAML assertions | PEM-formatted certificate |
| **IdP SLO Service URL** | Single Logout URL (optional) | `https://idp.example.com/saml/slo` |

### Attribute Mappings

| Setting | Description | Default |
|---------|-------------|---------|
| **UID Attribute** | Attribute used as user identifier | `email` |
| **Email Attribute** | Attribute containing user email | `email` |
| **Name Attribute** | Attribute for display name | `name` |
| **Groups Attribute** | Attribute containing group memberships (optional) | - |

### Security Settings

| Setting | Description | Default |
|---------|-------------|---------|
| **Want Assertions Signed** | Require the IdP to sign SAML assertions | Enabled |
| **AuthN Requests Signed** | Sign authentication requests sent to the IdP | Disabled |
| **Name Identifier Format** | Format for the NameID element | `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress` |

### Team Provisioning

When **Team Provisioning Mode** is set to **Just In Time**, Canine automatically syncs a user's SAML group attributes to Canine teams when they log in. On each login:

- The user is added to Canine teams that match their current SAML groups
- The user is removed from Canine teams if they no longer belong to the corresponding group

## Identity Provider Setup Guides

### Okta

1. In Okta Admin Console, go to **Applications > Create App Integration**
2. Select **SAML 2.0**
3. Set the **Single sign-on URL** to your ACS URL
4. Set the **Audience URI (SP Entity ID)** to your SP Entity ID
5. Configure attribute statements for email, name, and groups
6. Download the IdP metadata or note the Entity ID, SSO URL, and certificate

### Azure AD (Microsoft Entra ID)

1. In Azure Portal, go to **Enterprise Applications > New Application**
2. Select **Create your own application** and choose **Non-gallery**
3. Under **Single sign-on > SAML**, configure:
   - **Identifier (Entity ID)**: Your SP Entity ID
   - **Reply URL (ACS URL)**: Your ACS URL
4. Download the **Certificate (Base64)** from the SAML Signing Certificate section
5. Copy the **Login URL** and **Azure AD Identifier** from the setup section

### OneLogin

1. In OneLogin, go to **Applications > Add App**
2. Search for **SAML Custom Connector (Advanced)**
3. In **Configuration**, set the ACS URL and Entity ID
4. In **SSO**, copy the Issuer URL, SAML Endpoint, and X.509 Certificate

## Troubleshooting

### Invalid Signature

- Verify the IdP certificate is correct and complete (including BEGIN/END markers)
- Check that **Want Assertions Signed** matches your IdP's signing configuration
- Ensure the certificate hasn't expired

### User Not Found / Attribute Mapping

- Verify attribute names match exactly what your IdP sends
- Check the SAML response using browser developer tools to see the actual attribute names
- Some IdPs use different attribute formats (e.g., `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` vs `email`)

### Redirect Loop

- Ensure the ACS URL in your IdP matches exactly (including protocol and path)
- Check that the SP Entity ID is consistent between Canine and your IdP configuration
