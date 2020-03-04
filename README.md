# FundMyHealth - UOttaHacks2020
An app that strives to decentralize pharmaceuticals through public stock exchange based architecture

# Inspiration
It takes a long time for new vaccines and medications to be produced and tested due to the limited fundings those institutions receive. We hope to find a way to expedite this process. FundMyHealth aims to decentralize pharmaceuticals by publicizing ownership of drugs patients need access to. This is done through a share-based system modeled off of modern stock markets.

# What It Does
We strive to make new medications and vaccines more affordable for patients across North America by creating an open market for researchers to sell patents to drugs similar to how a stock is traded on the open market. In this way, privately-owned companies are unable to monopolize the pharmaceutical industry, allowing greater public access to vital drugs and treatments.

# How I Built it
We built an event-driven application using Solace, similar to the London Stock Exchange, using Android Studio/React for the frontend and an ExpressJS Node.js for our backend. Using an event-driven architecture, vital share prices of drugs are funneled from our ExpressJS server to the React frontend in an asynchronous manner. Additionally, querying the Solace message broker allowed us to use wildcards to customize our queries similar to a multi-dimensional OLAP database - allowing us to cut and drill-through data.

# Devpost Link
https://devpost.com/software/fundmyhealth
