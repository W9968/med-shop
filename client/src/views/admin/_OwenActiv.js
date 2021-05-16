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
              you{' '}
              {log.event === 'deleted' ? (
                <>
                  <span>{log.event}</span>{' '}
                  <span>{JSON.parse(log.old_values).title} from</span>{' '}
                  <span>{log.auditable_type.split('\\')[2]}</span>
                </>
              ) : log.event === 'updated' ? (
                <>
                  <span>{log.event}</span>{' '}
                  <span>
                    {JSON.parse(log.old_values).tag} to{' '}
                    {JSON.parse(log.new_values).tag} from{' '}
                  </span>{' '}
                  <span>{log.auditable_type.split('\\')[2]}</span>
                </>
              ) : (
                log.event === 'created' && (
                  <>
                    <span>{log.event}</span>{' '}
                    <span>{JSON.parse(log.new_values).tag} in </span>{' '}
                    <span>{log.auditable_type.split('\\')[2]}</span>
                  </>
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
