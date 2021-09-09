import { useDisclosure } from '@chakra-ui/hooks';
import { Stack } from '@chakra-ui/layout';
import React, { useState } from 'react';
import MappedReportsRows from './MappedReportRows';
import PseudoTableHead from './PseudoTableHead';
import ReportModalBox from './ReportModalBox';
import SortingHeadBar from './SortingHeadBar';

const reportsArray = [
  {
    date: '31/4/2021',
    activity:
      "Yar Pirate Ipsum Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.",
    report: 'report on fake activity',
    cost: '4000',
    priority: 'Low',
    media_link: '#',
  },
  {
    date: '31/4/2021',
    activity:
      "Yar Pirate Ipsum Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.",
    report: 'report on fake activity',
    cost: '4000',
    priority: 'High',
    media_link: '#',
  },
  {
    date: '31/4/2021',
    activity:
      "Yar Pirate Ipsum Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.",
    report: 'report on fake activity',
    cost: '4000',
    priority: 'Normal',
    media_link: '#',
  },
];

export default function PackDetailsTable() {
  //eslint-disable-next-line
  const [reports, setReports] = useState(reportsArray);
  const [reportToView, setReportToview] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack spacing="10px" py="8">
      <SortingHeadBar />
      <PseudoTableHead />
      {reports &&
        reports.map((r, i) => {
          return (
            <MappedReportsRows
              report={r}
              key={i}
              setReportToview={setReportToview}
              onOpen={onOpen}
            />
          );
        })}
      {reportToView && (
        <ReportModalBox
          reportToView={reportToView}
          onClose={onClose}
          isOpen={isOpen}
        />
      )}
    </Stack>
  );
}
