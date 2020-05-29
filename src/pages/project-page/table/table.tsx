import React from 'react';
import { Panel } from 'components/panel';
import { mixClasses } from 'src/components/panel/panel';
import { FilesList } from 'components/files-list';
import { Matcher } from 'src/components/matcher/matcher';
import styles from './table.module.scss';

const getPotentialBugsView = (files: any) => {
    return files.map((file: any) => (
        <Matcher
            matcher={{
                text: file.name,
                number: `${file.changes} changes / bugs ${file.bugs} and ${file.coverage} coverage`
            }}
            className={styles.table__file}
        />
    ));
};

interface TableProps {
    before: any;
    after: any;
}

export const Table = ({ before, after }: TableProps) => {
    const topFilesBefore = before.topFiles.map((file: any) => (
        <Matcher
            matcher={{
                text: file.name,
                number: `changes ${file.changes}, bugs ${file.bugs}`
            }}
            className={styles.table__file}
        />
    ));

    const topFilesAfter = after.topFiles.map((file: any) => (
        <Matcher
            matcher={{
                text: file.name,
                number: `changes ${file.changes} (+${file.newChanges}), bugs ${file.bugs} (+${file.newBugs})`
            }}
            className={styles.table__file}
        />
    ));

    const potentialBugsBefore = getPotentialBugsView(before.potentialBugs);
    const potentialBugsAfter = getPotentialBugsView(after.potentialBugs);

    return (
        <div className={styles.table}>
            <div className={styles.table__row}>
                <Panel
                    cards={[{ text: '%', number: '12.5' }]}
                    className={styles.table__cell}
                    cardClassName={styles.table__card}
                />
                <Panel
                    cards={[{ text: '%', number: '12.5' }]}
                    className={styles.table__cell}
                    cardClassName={styles.table__card}
                />
            </div>
            <div className={mixClasses(styles.table__row, styles.table__title)}>
                <div className={styles.table__cell}>Top edited files</div>
                <div className={styles.table__cell}>Top new edited files</div>
            </div>
            <div className={styles.table__row}>
                <div className={styles.table__cell}>
                    <FilesList files={topFilesBefore} />
                </div>
                <div className={styles.table__cell}>
                    <FilesList files={topFilesAfter} />
                </div>
            </div>
            <div className={mixClasses(styles.table__row, styles.table__title)}>
                <div className={styles.table__cell}>Potential bugs</div>
                <div className={styles.table__cell}>New potential bugs</div>
            </div>
            <div className={styles.table__row}>
                <div className={styles.table__cell}>
                    <FilesList files={potentialBugsBefore} />
                </div>
                <div className={styles.table__cell}>
                    <FilesList files={potentialBugsAfter} />
                </div>
            </div>
        </div>
    );
};
