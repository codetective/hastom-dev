import React, { useEffect, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

export default function ReportModalBox({ reportToView, isOpen, onClose }) {
  const [report, setReport] = useState(reportToView);

  useEffect(() => {
    setReport(reportToView);
    //eslint-disable-next-line
  }, [reportToView, isOpen]);
  return (
    <>
      <Modal isOpen={report && isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textTransform="capitalize">
            {report.title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {report.description}
            <br/>
            <br/>
            <small>{report.link}</small>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blackAlpha" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
