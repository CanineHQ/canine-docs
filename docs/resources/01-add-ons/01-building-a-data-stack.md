---
sidebar_position: 0
---

# Deploying a modern data stack

In this guide, you'll learn how to deploy a data stack with
* Clickhouse (for warehousing)
* Airbyte (for replication)
* Metabase (for dashboarding)

Typically, you'll have an application that's deployed on something like Postgres, MySQL, MongoDB, etc, and you'll want to show analytics directly from your application. This involves
1. replicating data from your production database to an OLAP database, where queries can be run safely
2. showing the data in a dashboard

And ideally, you want to do all the behind-the-scenes replications within a private network, so that you never have to expose any data to the public internet.

The architecture we'll set up in this guide is a modern stack that does all of these.

<div class="alert alert-warning">This guide is a work in progress, more coming soon</div>