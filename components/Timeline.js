import React, { useState, useEffect } from "react";
import styles from "./Timeline.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [timelineItems, setTimelineItems] = useState([]);

  useEffect(() => {
    const fetchTimelineItems = async () => {
      try {
        const response = await fetch("/api/timeline-items");
        const data = await response.json();
        setTimelineItems(data);
      } catch (error) {
        console.error("Error fetching timeline items:", error);
      }
    };

    fetchTimelineItems();
  }, []);

  const handleAccordionChange = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <Accordion allowToggle index={[activeIndex]} defaultIndex={[0]}>
      {timelineItems.map((item, index) => (
        <AccordionItem key={item.year} alignContent={"center"} mx={80}>
          <h2>
            <AccordionButton
              w={"100%"}
              className={styles.accordionButton}
              onClick={() => handleAccordionChange(index)}
              p={6}
              m={4}
            >
              <Box flex="1" textAlign="center">
                {item.year}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel w={"100%"} className={styles.accordianPanel} pb={4}>
            <Text>{item.text}</Text>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export { Timeline };
