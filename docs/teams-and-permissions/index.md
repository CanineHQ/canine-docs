---
id: teams-permissions-index
title: Teams and Permissions
sidebar_label: Overview
sidebar_position: 0
---

# Teams and Permissions

Canine provides a flexible team and permission system that allows you to organize users and control access to your Kubernetes resources. This section covers how to set up teams, assign roles, and manage permissions across your organization.

## Core Concepts

### [Teams](./01-teams.md)
Learn how to create and manage teams to organize users within your Canine instance. Teams allow you to group users together and assign shared access to clusters and projects.

### Roles and Permissions (Coming Soon)
Understand the different roles available in Canine and what permissions each role grants. Configure granular access control for your organization's needs.

### Managing Access (Coming Soon)
Learn how to invite users, assign them to teams, and manage their access to specific clusters and projects.

## Why Use Teams?

Teams in Canine help you:

- **Organize users** - Group users by department, project, or function
- **Simplify access management** - Assign permissions to teams instead of individual users
- **Enforce security** - Ensure users only have access to the resources they need
- **Scale efficiently** - Easily onboard new team members with pre-configured access

## Permission Model

Canine uses a hierarchical permission model:

```
Organization
    └── Teams
        └── Users
            └── Cluster Access
                └── Project Access
```

Permissions flow down from the organization level, with more specific permissions at lower levels taking precedence. This allows you to set broad defaults while customizing access for specific use cases.

## Quick Start

1. **Create a team** - Start by creating teams that match your organization structure
2. **Define roles** - Assign appropriate roles to each team
3. **Add members** - Invite users and add them to the relevant teams
4. **Grant access** - Assign cluster and project access to teams

Ready to get started? Begin with [Teams](./01-teams.md) to learn how to create your first team.
