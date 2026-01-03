---
sidebar_position: 1
---

# Teams

Teams are the primary way to organize users and control access to resources in Canine. The team system works similarly to GitHub's organization model.

## How Teams Work

Canine uses a simple, flexible approach to access control:

- **No teams created**: All users in the account have access to all clusters and projects
- **Teams created**: Resources are granted at the team level, and users only have access to resources assigned to their teams

This allows small teams to get started quickly without any access configuration, while larger organizations can set up granular access control when needed.

## Creating a Team

To create a new team:

1. Navigate to **Settings > Teams** in the Canine dashboard
2. Click **+ Create Team**
3. Enter a team name and optional description
4. Click **Create**

:::note
Once you create your first team, access control becomes active. Make sure to assign users and resources to teams, or they may lose access.
:::

## Team Settings

Each team has configurable settings:

| Setting | Description |
|---------|-------------|
| **Name** | A unique identifier for the team |
| **Description** | Optional description of the team's purpose |
| **Members** | Users who belong to this team |
| **Clusters** | Which clusters this team can access |
| **Projects** | Which projects this team can access |

## Managing Team Members

### Adding Members

1. Go to **Settings > Teams** and select your team
2. Click **Add Member**
3. Search for users by name or email
4. Click **Add**

### Removing Members

1. Go to **Settings > Teams** and select your team
2. Find the member in the members list
3. Click the **Remove** button next to their name
4. Confirm the removal

## Assigning Resources to Teams

### Granting Cluster Access

1. Go to **Settings > Teams** and select your team
2. Navigate to the **Clusters** tab
3. Select the clusters this team should have access to
4. Click **Save**

### Granting Project Access

1. Go to **Settings > Teams** and select your team
2. Navigate to the **Projects** tab
3. Select the projects this team should have access to
4. Click **Save**

Alternatively, you can assign teams when creating or editing a cluster or project.

## Best Practices

### When to Create Teams

Consider creating teams when:

- Your organization has multiple departments or groups
- You need to restrict access to production environments
- You want to separate access between different projects
- Compliance requirements mandate access control

### Naming Conventions

Use clear, descriptive names that reflect the team's purpose:

- `backend` - Backend engineering team
- `frontend` - Frontend engineering team
- `devops` - DevOps and infrastructure team
- `data-science` - Data science team

### Access Patterns

- Grant minimum necessary permissions
- Review team membership regularly
- Remove inactive members promptly
- Document the purpose of each team in the description field
