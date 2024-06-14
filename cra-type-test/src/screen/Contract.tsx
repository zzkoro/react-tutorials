import React from 'react';
import { FaShareAlt } from 'react-icons/fa';

interface ContractItemProps {
  title: string;
  date: string;
  status: string;
  color: string;
}

const ContractItem: React.FC<ContractItemProps> = ({ title, date, status, color }) => {
  return (
    <div style={styles.contractItem}>
      <h3 style={styles.contractItemTitle}>{title}</h3>
      <p style={styles.contractItemDate}>{date}</p>
      <span style={{ ...styles.contractItemStatus, color: color }}>{status}</span>
    </div>
  );
};

const ContractGroup: React.FC = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <button style={styles.backButton}>←</button>
        <h1 style={styles.title}>줌줌컴퍼니 주주그룹</h1>
        <button style={styles.shareButton}>
          <FaShareAlt />
        </button>
      </header>
      <section style={styles.infoSection}>
        <p>유니콘 기업을 꿈꾸는 줌줌컴퍼니 주주 그룹입니다. 모든 계약 문서를 관리하고 있습니다.</p>
        <div style={styles.memberInfo}>
          <span>줌줌대표 (홍길동) | 멤버 1500명</span>
        </div>
      </section>
      <section style={styles.contractSection}>
        <h2 style={styles.contractTitle}>똑똑 계약</h2>
        <div style={styles.tab}>
          <button style={styles.tabButton}>전체</button>
          <button style={styles.tabButton}>안 읽은 채팅방</button>
        </div>
        <div style={styles.contractList}>
          <ContractItem
            title="주주간계약서(주 세라젬컴퍼니컴퍼니컴퍼니컴퍼니)"
            date="2024.01.21 13:00"
            status="서명 완료"
            color="blue"
          />
          <ContractItem
            title="비밀유지서약서"
            date="2024.01.21 13:00"
            status="계약 완료"
            color="green"
          />
          <ContractItem
            title="근로계약서"
            date="2024.01.21 13:00"
            status="재서명 필요"
            color="red"
          />
        </div>
      </section>
      <footer style={styles.footer}>
        <div style={styles.ad}>
          <p>한도 제한 없이 누구나</p>
          <p>최고 연 2.65% Hi 입출금 통장</p>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    fontSize: '20px' as const,
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold' as const,
  },
  shareButton: {
    fontSize: '20px',
  },
  infoSection: {
    marginTop: '10px',
  },
  memberInfo: {
    marginTop: '5px',
    color: 'gray',
  },
  contractSection: {
    marginTop: '20px',
  },
  contractTitle: {
    fontSize: '16px',
    fontWeight: 'bold' as const,
  },
  tab: {
    display: 'flex',
    marginTop: '10px',
  },
  tabButton: {
    padding: '10px',
    border: 'none',
    backgroundColor: 'lightgray',
    marginRight: '5px',
    borderRadius: '5px',
  },
  contractList: {
    marginTop: '10px',
  },
  contractItem: {
    borderBottom: '1px solid lightgray',
    paddingBottom: '10px',
    marginBottom: '10px',
  },
  contractItemTitle: {
    fontSize: '14px',
    fontWeight: 'bold' as const,
  },
  contractItemDate: {
    fontSize: '12px',
    color: 'gray',
  },
  contractItemStatus: {
    fontSize: '12px',
    fontWeight: 'bold' as const,
  },
  footer: {
    marginTop: '20px',
  },
  ad: {
    padding: '10px',
    backgroundColor: 'lightgreen',
    borderRadius: '5px',
    textAlign: 'center' as const,
  },
};

export default ContractGroup;
