import { getCurrentAmount } from "../../../app/admin/wallet/services/wallet.service";
import { Box, Text } from "@chakra-ui/react";
import { FaReact } from "react-icons/fa6";

function Balance() {
  const currentAmount = getCurrentAmount();

  return (
    <Box className="Balance">
      <Box className="data">
        <FaReact size="48"/>
        <Box>
          <Text>Account</Text>
          <Text>ESxx 21xx 6xxx xxx2 0000 0000</Text>
        </Box>
      </Box>
      <span className="amount">
       {currentAmount} €
      </span>
    </Box>
  )
}

export default Balance;
