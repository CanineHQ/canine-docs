# User Management

In self-hosted mode (both local and cluster), user registration is handled differently from the cloud version.

## How It Works

1. **Onboarding** — The first user is created through the onboarding flow when no users exist in the system. This user becomes the admin.
2. **Sign-up disabled** — After onboarding, the `/users/sign_up` route is disabled. Visiting it redirects to the sign-in page.
3. **Invitations** — Additional users are added by the admin through the team management interface (**Team Members > + Add Team Member**).

## Adding New Users

As an admin, navigate to your account settings and invite users by email. They'll receive an invitation link to set up their password and join your account.

## Passwordless Login (Local Mode Only)

For trusted environments (e.g., a home lab), you can enable passwordless login:

```env
LOCAL_MODE_PASSWORDLESS=true
```

With this enabled, users can sign in without a password from the account selection screen. Only enable this if Canine is not exposed to the public internet.
