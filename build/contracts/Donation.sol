// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Donation {

    // Structure pour représenter une donation
    struct DonationInfo {
        uint id;
        address donateur;
        uint montant;
        uint timestamp;
    }

    // Événement émis lorsqu'une donation est créée
    event DonationCreated(uint indexed id, address indexed donateur, uint montant, uint timestamp);

    // Mappage des donations par leur ID
    mapping(uint => DonationInfo) public donations;

    // Compteur de donations
    uint public donationCount;

    // Fonction pour créer une donation
    function createDonation() external payable {
        require(msg.value > 0, "Le montant de la donation doit être supérieur à zéro");

        donationCount++;

        donations[donationCount] = DonationInfo({
            id: donationCount,
            donateur: msg.sender,
            montant: msg.value,
            timestamp: block.timestamp
        });

        emit DonationCreated(donationCount, msg.sender, msg.value, block.timestamp);
    }

    // Fonction pour obtenir le nombre total de donations
    function getTotalDonations() external view returns (uint) {
        return donationCount;
    }

    // Fonction pour obtenir les détails d'une donation par son ID
    function getDonation(uint _id) external view returns (uint id, address donateur, uint montant, uint timestamp) {
        DonationInfo storage donation = donations[_id];
        return (donation.id, donation.donateur, donation.montant, donation.timestamp);
    }
}
