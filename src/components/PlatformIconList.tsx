import { HStack, Icon } from "@chakra-ui/react";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import Platform from "../entities/Platform";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    android: FaAndroid,
    xbox: FaXbox,
    playstation: FaPlaystation,
    nintendo: SiNintendo,
    linux: FaLinux,
    mac: FaApple,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          color={"gray.500"}
          as={iconMap[platform.slug]}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
