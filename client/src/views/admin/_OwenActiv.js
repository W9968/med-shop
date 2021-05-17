import React, { useEffect } from 'react'
import styled from 'styled-components'
import { ContentHeader } from '../../components/imports'
import { useCrud } from '../../global/exports'

const _OwenActiv = () => {
  const { auditLogs, logs } = useCrud()

  useEffect(() => {
    auditLogs()
  }, [auditLogs])

  return (
    <>
      <ContentHeader header='recent activity' boolState={false} />
      <Wrapper>
        {logs.map((log, key) => {
          return (
            <div key={key}>
              {log.event === 'deleted' ? (
                <Card>
                  <span>you</span>
                  <span>{log.event}</span>{' '}
                  <span>{log.auditable_type.split('\\')[2]}</span>{' '}
                  <span>with the id:{JSON.parse(log.old_values).id}</span>
                </Card>
              ) : log.event === 'updated' ? (
                <Card>
                  you
                  <span>{log.event}</span>{' '}
                  <span>
                    {JSON.parse(log.old_values).tag} to{' '}
                    {JSON.parse(log.new_values).tag} from{' '}
                  </span>{' '}
                  <span>{log.auditable_type.split('\\')[2]}</span>
                </Card>
              ) : (
                log.event === 'created' && (
                  <Card>
                    you
                    <span>{log.event}</span>{' '}
                    <span>a new {log.auditable_type.split('\\')[2]}</span>
                  </Card>
                )
              )}
            </div>
          )
        })}
      </Wrapper>
    </>
  )
}

export default _OwenActiv

const Wrapper = styled.div`
  padding: 1rem;
`

const Card = styled.div`
  padding: 15px;
  border-radius: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.darkhover};
`
