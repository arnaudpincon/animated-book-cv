import './styles/tableContent.css'

export const TableContent = () => {
    const tableOfContents = [
        {
            title: "1- Summary",
            description: "My current summary, developed as an introduction",
            page: 2
        },
        {
            title: "2- Experience",
            description: "My work experiences presented chronologically",
            page: 5
        },
        {
            title: "3- Education",
            description: "My education",
            page: 9
        },
        {
            title: "4- Projects",
            description: "My significant projects",
            page: 13
        }
    ];

    return (
        <div className="table-of-contents">
            <div className="toc-list">
                {tableOfContents.map((item, index) => (
                    <div className="toc-item" key={index}>
                        <div className="toc-title-line">
                            <h3 className="toc-title">{item.title}</h3>
                            <div className="toc-page">{item.page}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TableContent;