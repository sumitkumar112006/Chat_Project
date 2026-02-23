#!/bin/bash
# Start script for production deployment

# Frontend will be built and served by vite
# Backend will run on the assigned PORT (default 3001, Railway sets it)
npm run dev:server
