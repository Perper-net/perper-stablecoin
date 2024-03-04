// SPDX-License-Identifier: MIT
// Used for testing upgradability
pragma solidity ^0.8.4;

import "../Perper.sol";

contract MockTokenV2 is Perper {
    bool public isThisNewVersion = true;
}
