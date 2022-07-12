import mongoose from 'mongoose';
const { Schema } = mongoose;

const projectSchema = new Schema({
    tokenAddress: String,
    tokenName: String,
    tokenWebsite: String,
    shortDescription: String,
    longDiscription: String,
    logoUrl: String,
    tokenSymbol: String,
    tokenDecimals:  { type: Number, default: 18 },
    tokenTotalSupply: Number,
    tokenOwnerAddress: String,
    tokenPreSaleAddress: String,
    tokenType: { type: Number, default: 0},
    totalIDOTokens: Number,
    totalLiquidityTokens: Number,
    softCap: Number,
    hardCap: Number,
    IDORate: Number,
    listingRate: Number,
    socials: {
        twitter: String,
        telegram: String,
        reddit: String,
        discord: String,
        medium: String,
    },
    liquidityPercentage: { type: Number, default: 70 },
    minContribution: { type: Number, default: 0.1 },
    maxContribution: { type: Number, default: 3 },
    startTime: { type: Date },
    endTime: { type: Date },
    status: { type: Boolean, default: false },
    ended: { type: Boolean, default: false },
    success: { type: Boolean, default: false },
    dateCreated: { type: Date, default: Date.now }
});

module.exports = projectSchema;